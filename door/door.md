# Door

> A powerful HyperScript implementing a door for hyperfy

## 📋 Implementation Overview

### Core State Variables

| State Variable | Purpose |
|---------------|---------|
| `isOpen` | Tracks whether the door is currently open or closed |
| `isMoving` | Indicates if the door is in motion |
| `currentPosition` | Current door position (0 = closed, 1 = open) |
| `targetPosition` | Target door position (0 = closed, 1 = open) |
| `openTimer` | Tracks duration before auto-closing |

### Configuration Options

```javascript
{
  "type": "sliding",     // or "swinging"
  "direction": "outward", // or "inward"
  "slideDistance": 0.65,
  "maxRotation": 45
}
```

## 🎮 Door Components

it is important to match the names of the components in your blender scene to the names in the code.

- `doorFrame`: Main door structure
- `doorL`: Left door component
- `doorR`: Right door component

![](https://imgur.com/gniojmv.png)



## ⚙️ Configuration UI

### Available Settings

- **Door Type**
  - Sliding (default)
  - Swinging
- **Slide Distance**
  - Default: 1.8 units
- **Max Rotation**
  - Default: 45 degrees
- **Direction**
  - Inward
  - Outward

## 🔄 Door Types

### 1. Sliding Doors FUTURE MODE
- Horizontal movement along X-axis
- Configurable slide distance
- Smooth animation system

### 2. Swinging Doors SALOON MODE
- Rotation-based movement
- Adjustable maximum angle
- Direction control

## 🎯 Interaction System

1. Trigger action appears above door frame
2. Players can toggle door state
3. Action label updates dynamically
4. Auto-close activates after 3 seconds
5. Smooth animation transitions

## 🔧 Technical Notes

- Uses delta time for consistent animations
- Value clamping for stability
- Automatic state management
- Configurable through simple JSON

> **Pro Tip**: All numerical values are automatically clamped to prevent unexpected behavior.

# 🚪 Setting Up Your Door in Blender

Proper setup in Blender is crucial for this script to function correctly. Follow these steps carefully:

### 0. 🔍 Figure out the door structure (important)
To achieve the door animation, you need to have a good hierarchy and naming of your rigid body components. In the example object the door is comprised of 4 parts:

- Empty: The parent object of the door.
  - FrameRigidBody: The main structure of the door.
    - FrameCollider: The collider for the door frame
    - FrameMesh: The mesh for the door frame
  - LeftDoorRigidBody: The left panel of the door.
    - LeftDoorCollider: The collider for the left door.
    - LeftDoorMesh: The mesh for the left door.
  - RightDoorRigidBody: The right panel of the door.
    - RightDoorCollider: The collider for the right door.
    - RightDoorMesh: The mesh for the right door.

![](https://i.imgur.com/rQ1Sc5u.png)

---

### 1. 🏗️ Door Frame (Rigid Body / static)
- **Name**: `Frame`
- **Description**: This is the main structure of your door. It should be a static object that serves as the parent for all door components.
- **Positioning**: Place it where you want your door to appear in the environment.

---

### 2. ⬅️ Create the Left Door (Rigid Body / kinematic)
- **Name**: `LeftDoor`
- **Description**: This is the left panel of your door. It should be a child of the `Empty` object.

---

### 3. ➡️ Create the Right Door (Rigid Body / kinematic)
- **Name**: `RightDoor`
- **Description**: This is the right panel of your door. It should also be a child of the `Empty` object.

---

### 5. 💾 Export Your Meshes
- Export your entire setup (Empty, Frame, LeftDoor, RightDoor) as a single .glb file for use in hyperfy.
- Ensure all names match exactly as specified (`Empty`, `Frame`, `LeftDoor`, `RightDoor`).
