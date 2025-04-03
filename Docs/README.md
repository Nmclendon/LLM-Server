# Project Andromeda:

## Overview

Andromeda is a local AI server capable of locally hosting a wide variety of large language models and integrating with the ChatGPT API. The project aims to service Lakeside faculty and students, and to provide a learning opportunity for students interested in AI/ML/LLMs. The knowledge gained will be used to form a club for students to experiment with and learn how to train and maintain large language models.

Current Team Members:

Student Leads: Nara Chen, Gabi Guidero

Student Contributors: Julia Hu, Michael Wang, Chase Culberson, Kellen Heraty

Staff Contributors: Patrick Graff, Taylor Kempf

College Intern Contributor: Nicholas McLendon

# Getting Started

### Prerequisites:

A computer with a mid to high tier consumer CPU and GPU for running models containing between 1 billion and 8 billion parameters. Larger models will require more powerful hardware.


## Installation:

### Clone the Repository:

Ensure Git is installed on your machine. Use the following command to clone the Open-WebUI repository:

**git clone https://github.com/open-webui/open-webui.git**

After the repository has been downloaded, switch to the newly created project directory

**cd open-webui**

### Copying the .env file:

From the project directory you should copy the example .env file to create your own .env file

**cp -RPp .env.example .env**

### Build the frontend using Node:

Next you'll want to install dependencies and do the initial build for the frontend using npm.

**npm install**
**npm run build**

### Running the Project in development mode:

To run the project in development mode you can use the following command:

**npm run dev**

This starts the development server on port 5173, changes made to the service are automatically pushed to the dev server as they are made. This allows us to test new features and code in real time without the risk of breaking the production server and without the need to rebuild the frontend with every change. 

### Verify the Setup:

To test the development server, open a web browser and go to http://localhost:5173. You should see the Open-WebUI interface. 

To test the production server, open a web browser and go to http://localhost:8080. You should see the Open-WebUI interface.

### Updating production.

Our production server will be running on port 8080, it is not dynamically updated when we make changes. To update it you will need to run **npm run build** again from the project directory. This will rebuild frontend production to reflect the changes, please make sure you are thoroughly testing any and all changes in a development environment before doing this, as the production server is what all of our users are interacting with, so we want to make sure it is as stable as possible.

### Troubleshooting:

If you encounter any issues with the installation process, refer to the Open-WebUI Documentation for detailed troubleshooting steps and additional configurations.

# Architecture and Design

## System Architecture:

Open-WebUI: Hosted on our server, it provides the web interface for interacting with the AI models.

SvelteKit: Integrated during the frontend build to enhance performance and responsiveness.

Ollama API: Used by Open-WebUI to download and manage open-source large language models (LLMs).

## Technology Stack:

Operating System: POP OS

Framework: SvelteKit

Deployment: NPM

Web Hosting Service: Open-WebUI

LLMs: Llama3, ChatGPT (via API, not locally hosted)

## Data Flow:

Users interact with the AI models via the Open-WebUI interface.

Open-WebUI communicates with the Ollama API to download and manage LLMs.

The processed data is displayed to the user through the SvelteKit-enhanced interface.

**(We will also need to add a piece here about how our users interact with the server over our network)**

# Features and Functionality

## Core Features:

In-House AI Models: Locally hosted AI models capable of performing various services for Lakeside students, support staff, and faculty while maintaining privacy and data integrity.

ChatGPT Integration: Open-WebUI handles API calls to ChatGPT. Internal data should NEVER be used with this model.

User Interface: Modified Open-WebUI interface tailored to fit the school's branding, providing a user experience similar to ChatGPT's website. All user conversations with both internal and external models can be tracked and reviewed through this interface.
## APIs:

ChatGPT API: Requires an API key and is managed through Open-WebUI.

# Development Process

### Below is a list of suggestions for managing our workflow and handling code changes moving forward. We don’t have to incorporate them, but they may become helpful as this project grows.

Gitflow: A robust strategy involving feature branches, develop and main branches, and release branches.

Feature Branching: Each feature or bug fix is developed in its own branch, merged into the development branch, and eventually merged into the main branch after rigorous testing.

### CI/CD Tools and Platforms Suggestions:

GitHub Actions: Integrates seamlessly with GitHub, allowing automated testing, building, and deployment.

CircleCI: Offers robust CI/CD solutions and integrates well with GitHub.

Jenkins: Highly customizable open-source automation server suitable for CI/CD pipelines.

# Usage and Examples

### Tutorials: This section will be written as features are developed

Administrative Bots: 

- Onboarding chatbots that can assist HR in guiding new employees through the onboarding process.
- Employee Handbook assisstance bots that can help address any questions current employees might have about Lakeside policies.
- Executive assisstant bots that can help EA's plan, stage, and execute their various job duties and projects 

Academic Assistance Bots: 

- Language learning bots that can help with practicing conversationsational and writing skills in various languages 
- Personalized tutors tailored to help with specific subjects and learning styles
- College application bots that can help seniors and rising seniors through the college application and scholarship process. 
# FAQs: 

### My model is not running on VRAM. Why?

This is a common problem some of the larger models seem to be having. When the server is initially started, it will load models into system RAM instead of VRAM. First, make sure that your GPU's are manually mapped in your environment. To do this you can edit the  ollama.service file in /etc/systemd/system:

From the home directory:

**sudo nano /etc/systemd/system/ollama.service**

Under the **[SERVICE]** block add the environment variable:

**Environment=CUDA_VISIBLE_DEVICES=GPU-UUID-goes-here**

Replace UUID-goes-ere witht he UUID of your GPU. To find your UUID you can use the command:

**nvidia-smi -L**

If you have multiple NVIDIA GPU's, you can map all of them by seperating each UUID with a comma, so it would look like:

**Environment=CUDA_VISIBLE_DEVICES=GPU-1-UUID-goes-here, GPU-2-UUID-goes-here, GPU-2-UUID-goes-here**

Once this variable is added you will need to restart the daemon to reload all unit files and recreate the dependency tree:

**sudo systemctl daemon-reload**

If your GPU's were already mapped, or if mapping them did not fix the problem another solution is try unmounting and remounting the NVIDIA modprobe:

**sudo modprobe -r nvidia_uvm**

**sudo modprobe nvidia_uvm**

**(Please add more troubleshooting content here as needed)**

### Best practices for prompt engineering.

**(Please add content here as we learn more about working with AI)**

# Contributing
### Code of Conduct:

Respectful Communication: All contributors must communicate respectfully, keeping in mind that this is a school environment.

Inclusivity: Ensure that all members feel welcome and included.

Reporting Issues: Contributors should report any issues or misconduct to student leads, currently Nara Chen and Gabi Guidero, or sponsoring staff members, currently Patrick Graff and Taylor Kempf.

### Licenses and Legal: (This section may be removed if it is deemed unnecessary)

The project is currently not open-source and is meant for internal use by members of Lakeside School only.

# Appendix

### References:
Open-WebUI Documentation: https://docs.openwebui.com/

Ollama Documentation: https://github.com/ollama/ollama

# Acknowledgements  

We want to acknowledge and thank Open-WebUI and Ollama for providing the necessary foundation needed to launch this project. Open-source contributors such as these deserve our recognition and accolades for everything they do. 

Additionally, we would like to give special thanks to the creators of this project here at Lakeside: Chase Culberson, Kellen Heraty, Nara Chen, Gabi Guidero, Julia Hu, Michael Wang, Patrick Graff, Taylor Kempf, and Nicholas McLendon. This project would not have been possible without all their hard work, dedication, passion and persistence.
