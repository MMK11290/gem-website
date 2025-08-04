import os
from PIL import Image
import pillow_avif  # enables AVIF support in Pillow

# === CONFIG ===
INPUT_DIR = 'images'
OUTPUT_DIR = 'compressed_images'
FORMAT = 'webp'  # change to 'avif' if you prefer AVIF
QUALITY = 70     # compression level (0–100), lower = smaller size

# === CREATE OUTPUT DIR ===
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# === PROCESS IMAGES ===
image_files = sorted(
    [f for f in os.listdir(INPUT_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
)
for index, filename in enumerate(image_files, start=1):
    input_path = os.path.join(INPUT_DIR, filename)
    output_path = os.path.join(OUTPUT_DIR, f"{index}.{FORMAT}")
    
    try:
        with Image.open(input_path) as img:
            img = img.convert("RGB")  # ensures compatibility
            img.save(output_path, format=FORMAT.upper(), quality=QUALITY, optimize=True)
        print(f"[✓] Converted {filename} → {index}.{FORMAT}")
    except Exception as e:
        print(f"[✗] Failed to convert {filename}: {e}")