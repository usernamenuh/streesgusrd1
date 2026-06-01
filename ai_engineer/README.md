# AI Engineer Service

Service ini berisi API machine learning untuk memprediksi tingkat stres berdasarkan pola tidur, screen time, dan penggunaan HP sebelum tidur. API dibuat dengan FastAPI, menggunakan model Keras (`best_model_gradient_tape.keras`) dan scaler (`scaler.pkl`).

## Isi Folder

- `api.py`: REST API FastAPI untuk endpoint prediksi.
- `model_service.py`: Load model, scaler, preprocessing input, dan prediksi kelas stres.
- `genai_service.py`: Membuat rekomendasi kesehatan preventif menggunakan OpenRouter. Jika API gagal, service memakai rekomendasi fallback.
- `best_model_gradient_tape.keras`: File model machine learning.
- `scaler.pkl`: Scaler untuk normalisasi fitur numerik.
- `requirements.txt`: Dependency Python.
- `Dockerfile`: Konfigurasi container untuk menjalankan API.
- `test_api.py`: Unit test dasar untuk endpoint dan handler prediksi.

## Environment Variable

Buat file `.env` di folder `ai_engineer`.

```env
OPENROUTER_API_KEY=isi_api_key_openrouter
PORT=8000
```

`OPENROUTER_API_KEY` digunakan untuk membuat rekomendasi otomatis. Jika key kosong, invalid, atau request ke OpenRouter gagal, API tetap mengembalikan hasil prediksi dan memakai fallback recommendation.

Pastikan `.env` tidak di-commit ke Git.

## Menjalankan Secara Lokal

Masuk ke folder `ai_engineer`.

```bash
cd ai_engineer
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn api:app --host 0.0.0.0 --port 8000
```

API akan berjalan di:

```text
http://localhost:8000
```

Dokumentasi Swagger otomatis tersedia di:

```text
http://localhost:8000/docs
```

## Menjalankan Dengan Docker

Build image:

```bash
cd ai_engineer
docker build -t ai-engineer .
```

Run container:

```bash
docker run --env-file .env -p 8000:8000 ai-engineer
```

Jika service backend juga berjalan di Docker, jangan gunakan `127.0.0.1` dari container backend untuk memanggil AI. Gunakan Docker network dan nama container.

Contoh:

```bash
docker network create stressguard-net

docker run \
  --name ai-engineer \
  --network stressguard-net \
  --env-file ai_engineer/.env \
  -p 8000:8000 \
  ai-engineer
```

Lalu pada `.env` backend:

```env
AI_API_URL=http://ai-engineer:8000/predict
```

## Endpoint

### `GET /`

Health check sederhana.

Contoh response:

```json
{
  "message": "Stress Detection API is running",
  "endpoint": "/predict"
}
```

### `POST /predict`

Membuat prediksi tingkat stres.

Request body:

```json
{
  "age": 21,
  "sleep_hours": 6.5,
  "sleep_quality_score": 7,
  "daily_screen_time_hours": 8,
  "phone_usage_before_sleep_minutes": 120,
  "gender": "male"
}
```

Response:

```json
{
  "status": "success",
  "input": {
    "age": 21,
    "sleep_hours": 6.5,
    "sleep_quality_score": 7,
    "daily_screen_time_hours": 8,
    "phone_usage_before_sleep_minutes": 120,
    "gender": "male"
  },
  "prediction": {
    "stress_level": "Medium Stress",
    "stress_score": 72.5,
    "high_probability": 10.2,
    "low_probability": 17.3,
    "medium_probability": 72.5
  },
  "recommendation": "Rekomendasi kesehatan preventif..."
}
```

## Format Input

- `age`: usia pengguna.
- `sleep_hours`: durasi tidur dalam jam.
- `sleep_quality_score`: skor kualitas tidur.
- `daily_screen_time_hours`: total screen time harian dalam jam.
- `phone_usage_before_sleep_minutes`: durasi penggunaan HP sebelum tidur dalam menit.
- `gender`: `male`, `female`, atau `other`.

## Integrasi Dengan Backend

Backend mengirim request ke AI service melalui `AI_API_URL`.

Payload dari backend akan diubah ke format yang dibutuhkan AI:

```json
{
  "age": 21,
  "sleep_hours": 6.5,
  "sleep_quality_score": 7,
  "daily_screen_time_hours": 8,
  "phone_usage_before_sleep_minutes": 120,
  "gender": "male"
}
```

Jika backend berjalan di host langsung:

```env
AI_API_URL=http://127.0.0.1:8000/predict
```

Jika backend berjalan di Docker network yang sama dengan AI:

```env
AI_API_URL=http://ai-engineer:8000/predict
```

## Testing

Jalankan unit test:

```bash
python -m unittest test_api.py
```

Tes manual dengan `curl`:

```bash
curl -X POST http://localhost:8000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "age": 21,
    "sleep_hours": 6.5,
    "sleep_quality_score": 7,
    "daily_screen_time_hours": 8,
    "phone_usage_before_sleep_minutes": 120,
    "gender": "male"
  }'
```

## Catatan Deployment

- Simpan `OPENROUTER_API_KEY` sebagai environment variable di platform deployment.
- Jangan hardcode API key di source code.
- Pastikan file model `.keras` dan `scaler.pkl` ikut masuk ke image Docker.
- Untuk komunikasi antar-service di Docker, gunakan service name atau container name, bukan `localhost`.
- Output rekomendasi bukan diagnosis medis dan hanya untuk edukasi kesehatan preventif.
