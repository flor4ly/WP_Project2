# Presentation Directory

This directory contains all the UI components organized by feature or page.

## Contents

- `about/`: Components related to the About page
- `careers/`: Components related to the Careers page
- `careers_info/`: Components providing detailed career information
- `home/`: Components for the Home page
- `project_detail/`: Components for displaying detailed project information
- `projects/`: Components for listing and managing projects
- `success_detail/`: Components for displaying success stories or case studies

## Structure

Each feature directory typically contains:
- React component files (`.jsx`)
- Component-specific styles
- Feature-specific utilities or hooks

## Purpose

The presentation directory follows a feature-based organization to:
- Group related components together
- Make the codebase more navigable
- Allow for feature-specific organization
- Separate UI concerns from data management

## Best Practices

- Keep components focused on presentation rather than data fetching
- Use consistent naming conventions across all feature directories
- Import data models and services from the `data` directory when needed
- Maintain a consistent component structure within each feature directory