# sit737-2025-prac6p
Here’s your complete and detailed `README.md` file with all the steps and information already formatted. You can copy and paste it directly into your project folder, or save it as `README.md`.

---

```markdown
# SIT737 Practical 6P – Kubernetes Deployment

## 📝 Overview

This project demonstrates how to deploy a simple Node.js application to a Kubernetes cluster using Docker Desktop on your local machine. The steps include creating a Docker image, pushing it to Docker Hub, and setting up Kubernetes Deployment and Service configurations.

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (with Kubernetes enabled)
- [Node.js](https://nodejs.org/en/)
- [kubectl CLI](https://kubernetes.io/docs/tasks/tools/)

---

## 📁 Project Structure

```
sit737-2025-prac6p/
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── index.js
├── package.json
└── README.md
```

---

## 🚀 Step-by-Step Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/krishna-2001/sit737-2025-prac6p.git
cd sit737-2025-prac6p
```

---

### Step 2: Build the Docker Image

```bash
docker build -t krishna820/node-app .
```

> Replace `krishna820` with your actual Docker Hub username.

---

### Step 3: Push Docker Image to Docker Hub

```bash
docker push krishna820/node-app:latest
```

- You must be logged in:
  ```bash
  docker login
  ```

- Ensure your Docker Hub repo is **public** or correctly authenticated.

---

### Step 4: Enable Kubernetes in Docker Desktop

1. Open Docker Desktop.
2. Go to **Settings > Kubernetes**.
3. Check  “Enable Kubernetes” and apply.
4. Wait until Kubernetes status is **Running**.

---

### Step 5: Apply Kubernetes Deployment

```bash
kubectl apply -f deployment.yaml
```

This will create 2 pods from your Docker image.

---

### Step 6: Apply Kubernetes Service

```bash
kubectl apply -f service.yaml
```

This exposes your app using NodePort on port **30080**.

---

### Step 7: Verify the Pods and Service

Check the running pods:
```bash
kubectl get pods
```

Check the service:
```bash
kubectl get svc
```

Expected output for the service:
```
NAME                TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
node-app-service    NodePort   10.x.x.x        <none>        80:30080/TCP   2m
```

---

### Step 8: Access the Application

Open your browser and go to:

```
http://localhost:30080
```

You should see your Node.js application running!

---

## 📸 Screenshots / Video

Include:
- Terminal screenshot showing `kubectl get pods` and `kubectl get svc`
- A browser screenshot showing the application running
- Optional: link to a screen recording demo

---

## 📦 Deliverables Summary

Your GitHub repository should contain the following:
- `Dockerfile` – Docker config for the Node.js app
- `index.js` – Node.js app entry file
- `package.json` – Node.js dependencies
- `deployment.yaml` – Kubernetes deployment
- `service.yaml` – Kubernetes service
- `README.md` – This file

---

## 🏁 Useful Commands

| Task                          | Command                                             |
|------------------------------|-----------------------------------------------------|
| Start watching pod status    | `kubectl get pods --watch`                         |
| Describe pod for debugging   | `kubectl describe pod <pod-name>`                  |
| View container logs          | `kubectl logs <pod-name>`                          |
| Delete all Kubernetes files  | `kubectl delete -f deployment.yaml`<br>`kubectl delete -f service.yaml` |
| View service details         | `kubectl get svc`                                  |

---

## 🙋‍♂️ Author

**Kolli Krishna Kumar**  
Student ID: 223246731  
Deakin University | SIT737 – Cloud Native Application Development

---

##  Final Notes

- Ensure your Docker image is successfully pushed to Docker Hub.
- Confirm that Kubernetes is running on Docker Desktop.
- Wait for pods to show `STATUS: Running` before testing in browser.
- The service is exposed via `NodePort` and should be accessible at `http://localhost:30080`.

---
```

Let me know if you'd like me to save this as a file for direct download or if you need help tweaking any part of it!
