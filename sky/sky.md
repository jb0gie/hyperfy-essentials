# Sky Controller Script Documentation

> A powerful hypescript implementing a skybox controller for hyperfy
## Overview
This script provides day/night cycle functionality for Hyperfy worlds by allowing users to switch between default daytime sky and a custom night sky environment.

## Configuration
The script uses Hyperfy's configuration system to expose the following settings:

### File Uploads
- **Night Sky Texture** (`skyNight`)
  - Type: Texture file
  - Purpose: Background sky texture for night mode
  - Optional: Yes (falls back to engine default if not set)

- **Night HDR** (`hdrNight`) 
  - Type: HDR file
  - Purpose: HDR lighting environment for night mode
  - Optional: Yes (falls back to engine default if not set)

### Controls
- **Day/Night Switch**
  - Key: `switch`
  - Type: Toggle switch
  - Options:
    - Day (☀️) - Value: "1" 
    - Night (🌙) - Value: "2"
  - Default: Day mode ("1")

## Technical Implementation

The script creates two core components:
1. A sky entity for the background environment
2. An HDR entity for lighting


These are initialized and added to the scene:

```javascript
const sky = app.create('sky')
const hdr = app.create('hdr')
app.add(sky)
app.add(hdr)
```
