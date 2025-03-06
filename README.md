# ServerForge CLI

A modern, interactive command-line tool for provisioning and configuring production-ready servers with ease.

![ServerForge CLI Banner](https://img.shields.io/badge/ServerForge-CLI-blue?style=for-the-badge&logo=terminal)
[![npm version](https://img.shields.io/npm/v/serverforge-cli.svg?style=flat-square)](https://www.npmjs.com/package/serverforge-cli)
[![downloads](https://img.shields.io/npm/dm/serverforge-cli.svg?style=flat-square)](https://www.npmjs.com/package/serverforge-cli)
[![license](https://img.shields.io/npm/l/serverforge-cli.svg?style=flat-square)](https://github.com/yourusername/serverforge-cli/blob/main/LICENSE)

## Overview

ServerForge is a powerful, TypeScript-based CLI tool designed to streamline the setup and configuration of production servers. It breaks down the complex process of server provisioning into intuitive, interactive modules with beautiful terminal interfaces.

## Features

- 🧙‍♂️ **Interactive Wizard** - Guided setup with intelligent defaults
- 🐳 **Docker Integration** - Seamless container management
- ☸️ **Kubernetes Setup** - Multiple distribution support (k3s, microk8s, minikube)
- 🗄️ **Database Deployment** - Both containerized and native options
- 🔧 **Infrastructure as Code** - Terraform and Ansible integration
- 🛠️ **DevOps Utilities** - Essential tools for modern operations
- 🔒 **Security Hardening** - Best-practice server security
- 🎨 **Beautiful UI** - Spinners, colors, and progress bars

## Installation

```bash
# Install globally
npm install -g serverforge-cli

# Or run with npx
npx serverforge-cli
```

## Quick Start

```bash
# Launch the interactive wizard
serverforge wizard

# Or use specific commands
serverforge system update
serverforge docker install
serverforge kubernetes setup --distribution=k3s
```

## Commands

ServerForge organizes functionality into logical command groups:

### System Commands

```bash
# Update system packages
serverforge system update

# Install essential tools
serverforge system install-essentials

# Configure firewall
serverforge system setup-firewall
```

### Docker Commands

```bash
# Install Docker and Docker Compose
serverforge docker install

# Set up container networks
serverforge docker network-setup
```

### Kubernetes Commands

```bash
# Install Kubernetes
serverforge kubernetes install --distribution=<k3s|microk8s|minikube>

# Deploy ArgoCD
serverforge kubernetes deploy-argocd
```

### Database Commands

```bash
# Deploy databases as containers
serverforge database deploy-containers

# Deploy databases on Kubernetes
serverforge database deploy-kubernetes
```

### Terraform Commands

```bash
# Initialize Terraform modules
serverforge terraform init-modules
```

### Ansible Commands

```bash
# Create Ansible playbooks
serverforge ansible create-playbooks

# Run system hardening playbook
serverforge ansible run-hardening
```

### Tools Commands

```bash
# Install DevOps utility tools
serverforge tools install-devops-suite
```

## Advanced Usage

ServerForge supports configuration files and environment variables for automation:

```bash
# Generate a config file
serverforge init --config=my-config.json

# Use a config file
serverforge wizard --config=my-config.json
```

## Documentation

For full documentation, visit [our documentation site](https://serverforge-cli.dev).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

