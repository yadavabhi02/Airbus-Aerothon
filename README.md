# Aircraft Fault Detection

This project is an Aircraft Fault Detection application, which uses a Python and Flask backend for machine learning-based image classification and a ReactJS frontend for user interaction.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [License](#license)

## Overview
The Aircraft Fault Detection application allows users to upload aircraft images and get a description of detected faults based on a trained machine learning model.

## Features
- Image upload functionality
- Fault detection using a custom-trained CNN model
- Display of results with confidence scores
- User-friendly interface with navigation

## Tech Stack
- **Frontend:** ReactJS
- **Backend:** Flask, TensorFlow, OpenCV
- **Other Libraries:** Pillow, Flask-CORS

## Setup

### Backend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushkwal/Aerothon60.git
   cd Aerothon60

2. **Set up a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required packages:**
   ```bash
   pip install -r requirements.txt

4. **Run the Flask app:**
   ```bash
   python app.py

The backend will be running on http://localhost:5000.

### Frontend

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend

2. **Install the dependencies:**
   ```bash
   npm install

3. **Start the React app:**
   ```bash
   npm start

The frontend will be running on http://localhost:3000.

## Usage
- Navigate to http://localhost:3000 in your web browser.
- Use the navigation bar to go to the "Fault Detection" page.
- Upload an image of an aircraft.
- View the fault detection result displayed on the page.

## Snapshots
-HomePage(Desktop View)
![image](https://github.com/ayushkwal/Aerothon60/assets/70058068/8558ff25-9470-46a7-b769-fdd9315ab798)


-Model1(Fault Detection)
<img width="944" alt="image" src="https://github.com/ayushkwal/Aerothon60/assets/70058068/3f3cad70-7c91-454b-9c52-080353048fff">




   

