# Air Purifier PWA

## Overview
This Progressive Web App (PWA) connects to an ESP32-powered air purifier via Bluetooth Low Energy (BLE). The app allows users to monitor real-time air quality data, control fan speed, and check the status of the air purifier remotely.

## Features
- 📡 **Bluetooth Low Energy (BLE) Connection** – Connect and communicate with ESP32.
- 🔄 **Real-time RPM Monitoring** – Read fan speed data from ESP32.
- 🌫 **Air Quality Sensor Data** – Display real-time dust levels using GP2Y1010AU0F sensor.
- 🌀 **Fan Speed Control** – Adjust fan speed via PWM.
- 📱 **PWA Support** – Works as a web app with offline support.
- 🎨 **Responsive UI** – Mobile-first design for seamless interaction.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, Web Bluetooth API
- **Backend:** ESP32 firmware (C++ with Arduino Framework)
- **Communication:** Bluetooth Low Energy (BLE)

## Hardware Requirements
- **ESP32 Development Board (WIR-00072)**
- **Arctic P12 Max 120mm Fan** (9V-powered, PWM-controlled)
- **GP2Y1010AU0F Dust Sensor** (for air quality monitoring)
- **MOSFET (IRFZ44N) & Resistors** (for PWM fan control)
- **Power Supply:** 9V for the fan, ESP32 powered via USB

## Wiring Diagram
- **ESP32 Power:** USB
- **Fan Power:** External 9V Supply
- **PWM Control:** ESP32 GPIO 16 → 10KΩ Resistor → MOSFET Gate
- **RPM Read:** Fan Tach (Green) → ESP32 GPIO 17 (Interrupt Input)
- **Dust Sensor:** Connected to ESP32 ADC for readings

## Installation & Setup
### **1. Flash ESP32 Firmware**
1. Install [Arduino IDE](https://www.arduino.cc/) or [PlatformIO](https://platformio.org/).
2. Install required ESP32 libraries:
   ```sh
   pio lib install "ESP32 BLE Arduino"
   ```
3. Upload the firmware to ESP32.

### **2. Install PWA**
1. Open the web app in a browser (Chrome, Edge, or any PWA-supported browser).
2. Click "Install" from the browser prompt.
3. Access the app from the home screen.

## Usage
1. **Connect to ESP32:** Enable Bluetooth and pair via Web Bluetooth.
2. **Monitor Air Quality:** View real-time air pollution levels.
3. **Adjust Fan Speed:** Use UI controls to change speed.
4. **View RPM Data:** Check current fan RPM.

## Troubleshooting
- Ensure **Bluetooth is enabled** on your device.
- If the fan is not responding, check **PWM connections and power supply**.
- Reload the app if the connection drops.

## Future Enhancements
- 🛠 **Temperature & Humidity Sensors**
- 📊 **Data Logging & Charts**
- 🌎 **Cloud Sync for Remote Monitoring**

---
**Author:** Mehedi Hasan
**License:** MIT  
**Last Updated:** 2025

