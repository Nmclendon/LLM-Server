# Prometheus and Grafana Setup Guide

To learn more about Prometheus (https://prometheus.io/docs/introduction/overview/) and Grafana (https://grafana.com/docs/grafana/latest/), please see their documentation pages. If you’d like a practical exercise to help reinforce some basics, feel free to follow along with the examples provided below.

## Setting Up Scrape Jobs in Prometheus

### Step 1: Install Prometheus
Ensure Prometheus is installed on your server. 

### Step 2: Configure Prometheus
Prometheus configuration is handled in the `prometheus.yml` file (located in `/etc/prometheus`), which defines the scrape jobs, alerting rules, and other configurations.

#### Define Scrape Jobs
Scrape jobs tell Prometheus where to scrape metrics from. A basic scrape job configuration goes at the bottom of the `prometheus.yml` file and looks like this:

**- job_name: 'node_exporter'
  static_configs:
    - targets: ['localhost:9100']**

**- job_name: 'gpu_metrics'
  static_configs:
    - targets: ['localhost:9100']**

### Step 3: Verify the Scrape Jobs

**Access Prometheus UI**:
   - Go to `http://<your-prometheus-server>:9090/targets` to verify that the targets are up and that Prometheus is scraping them correctly.

## Creating Dashboards in Grafana

### Step 1: Install Grafana
Ensure Grafana is installed on your server.

### Step 2: Connect Grafana to Prometheus

1. **Log in to Grafana**:
   - Access your Grafana instance at `http://<your-grafana-server>:3000`.

2. **Add Prometheus as a Data Source**:
   - Go to the Grafana home page, click on **"Connections"** (left-hand menu) > **"Data Sources"** > **"Add data source"**.
   - Select **Prometheus** from the list of data sources.
   - In the URL field, enter `http://<your-prometheus-server>:9090`.
   - Click **"Save & Test"** to ensure Grafana can connect to Prometheus.

### Step 3: Creating the "Network Metrics" Dashboard

1. **Create a New Dashboard**:
   - Click on the **"+"** icon in the sidebar, then select **"Dashboard"**.
   - Click **"Add new panel"** to create your first graph.

2. **Set Up Panels for Incoming and Outgoing Traffic**:

   - **Panel Title**: "Incoming Traffic (KB)"
     - Query: `rate(node_network_receive_bytes_total[5m]) / 1024`
     - Visualization: Choose the **"Graph"** panel.

   - **Panel Title**: "Outgoing Traffic (KB)"
     - Query: `rate(node_network_transmit_bytes_total[5m]) / 1024`
     - Visualization: **Graph** panel.

   - **Panel Title**: "Total TCP Connections"
     - Query: `sum(node_netstat_Tcp_CurrEstab)`
     - Visualization: **Stat** panel or **Graph** panel, depending on preference.

3. **Save the Dashboard**:
   - After adding the panels, click **"Apply"**, then **"Save"** the dashboard and give it a name like "Network Metrics".

### Step 4: Create the "General System Metrics" Dashboard

1. **Create a New Dashboard**:
   - Similar to the "Network Metrics" dashboard, create a new dashboard by clicking the **"+"** icon and selecting **"Dashboard"**.

2. **Set Up Panels for System Metrics**:

   - **Panel Title**: "RAM Usage"
     - Query: `node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100`
     - Visualization: **Gauge** or **Graph** panel.

   - **Panel Title**: "CPU Usage"
     - Query: `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`
     - Visualization: **Graph** panel.

   - **Panel Title**: "Disk Usage"
     - Query: `node_filesystem_avail_bytes / node_filesystem_size_bytes * 100`
     - Visualization: **Gauge** or **Graph** panel.

   - **Panel Title**: "VRAM Usage"
     - Query: Depending on your GPU exporter, you might use something like `nvidia_smi_vram_used_bytes / nvidia_smi_vram_total_bytes * 100`
     - Visualization: **Graph** or **Gauge** panel.

   - **Panel Title**: "GPU Temperature (°C)"
     - Query: Again, depending on the GPU exporter, something like `nvidia_smi_temp_gpu`
     - Visualization: **Graph** panel.

3. **Save the Dashboard**:
   - After adding all the relevant panels, click **"Apply"**, then **"Save"** the dashboard with a name like "General System Metrics".
