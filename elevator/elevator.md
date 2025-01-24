

# Elevator
> A powerful HyperScript implementing an elevator for hyperfy.

## 📋 Implementation Overview

### Core State Variables

| State Variable | Purpose |
|---------------|---------|
| `isMoving` | Indicates if the elevator is in motion |
| `isGoingUp` | Tracks the current direction of movement |
| `currentHeight` | Current elevation of the elevator (0 = ground level) |

### Configuration Options

```javascript
{
  "speed": 2.0,   // Speed of elevator movement in units per second
  "maxHeight": 10 // Maximum height the elevator can reach
}
```

## 🎮 Elevator Components

It is important to match the names of the components in your Blender scene to the names in the code.

- `Lift`: The main elevator car component. This should be a single object representing the elevator car.

## ⚙️ Configuration UI

### Available Settings

- **Speed**
  - Default: 2.0 units/second
  - Determines how fast the elevator moves.

- **Max Height**
  - Default: 10 units
  - Specifies the highest point the elevator can reach.

## 🔄 Movement Logic

### 1. Direction Handling
- The elevator automatically adjusts direction upon reaching `maxHeight` or ground level.
- The action button dynamically updates to 'Up' or 'Down' based on the elevator's current position and direction.

## 🎯 Interaction System

1. **Action Button**: Located at the call panel, labeled 'Up' or 'Down'.
2. **Player Interaction**: Players can toggle the elevator's direction to call it to their floor.
3. **Smooth Animation**: The elevator moves smoothly to the target height based on the configured speed.

## 🔧 Technical Notes

- **Delta Time**: Uses `dt` for smooth and consistent movement.
- **Input Handling**: Manages multiple interactions to ensure only one action is processed.
- **Clamping Values**: Ensures the elevator stays within defined bounds.

> **Pro Tip**: All numerical values are automatically clamped to prevent unexpected behavior.

---

## 🚪 Setting Up Your Elevator in Blender

Proper setup in Blender is crucial for this script to function correctly. Follow these steps carefully:

### 1. 🏗️ Create the Elevator Car

- **Name**: `Lift`
- **Description**: This is the elevator car. It should be positioned at ground level (e.g., at (0, 0, 0)).
- **Positioning**: Place it at your desired location in the environment.
- **Components**: Include any necessary meshes or colliders for the elevator car.

---

### 2. 💾 Export Your Model

- Export your elevator model as a single `.glb` file for use in hyperfy.
- Ensure the model's name matches exactly as specified (`Lift`).

---

### 3. Linking to hyperfy

- Import the exported `.glb` file into hyperfy.
- Attach the `elevator.js` **hypescript** to the `Lift` component.
- Ensure all configuration values are set up according to your needs.

---

### 4. Testing the Elevator

- Test interacting with the elevator's movement.
- Check that it responds correctly to player interactions and moves smoothly.
- Adjust the configuration settings as needed for optimal performance.

---

## 📝 Conclusion

With the Elevator **hypescript** you now have a robust solution for creating interactive elevators in hyperfy. With careful setup, naming conventions, and proper configuration, you can create engaging and realistic elevator interactions. Follow the steps and guidelines provided in this document for a seamless implementation.

If you have any questions or encounter issues, consult the troubleshooting section or refer back to this documentation for guidance. Hype scripting! 🚀