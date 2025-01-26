// chair.js 
// take a load off

let isSitting = false
let currentAvatar = null

// Get chair components
const chair = app.get('ComfyChair')
const sitMarker = app.get('SitMarker')

// Create interact action
const action = app.create('action')
action.label = 'Sit'
action.position.copy(sitMarker.position)
action.distance = 1
chair.add(action)

// Track player state
const playerState = {
	emote: null,
	prevEmote: null
}

// Handle sitting/standing
action.onTrigger = () => {
	const avatar = app.avatar
	if (!avatar) return

	if (!isSitting) {
		// Remember previous emote state
		playerState.prevEmote = playerState.emote

		// Sit down
		isSitting = true
		currentAvatar = avatar
		action.label = 'Stand'

		// Move avatar to sit marker
		avatar.matrix.copy(sitMarker.matrixWorld)

		// Play sit animation using asset URL
		const sitUrl = `asset://${app.config.sitEmote?.url}`
		avatar.setEmote(sitUrl)
		playerState.emote = 'sit'

	} else {
		// Stand up
		isSitting = false
		action.label = 'Sit'

		// Restore previous emote state or clear
		if (currentAvatar) {
			if (playerState.prevEmote) {
				const prevUrl = `asset://${app.config.idleEmote?.url}`
				currentAvatar.setEmote(prevUrl)
			} else {
				currentAvatar.setEmote(null)
			}
		}

		playerState.emote = playerState.prevEmote
		playerState.prevEmote = null
		currentAvatar = null
	}
}

// Chair config UI
app.configure(() => {
	return [
		{
			key: 'chair',
			type: 'section',
			label: 'Chair Settings',
		},
		{
			key: 'distance',
			type: 'textarea',
			label: 'Interaction Distance',
			defaultValue: '2',
			placeholder: '2'
		},
		{
			key: 'emotes',
			type: 'section',
			label: 'Emotes',
		},
		{
			key: 'name',
			type: 'text',
			label: 'Name',
		},
		{
			key: 'context',
			type: 'textarea',
			label: 'Context',
		},
		{
			key: 'url',
			type: 'text',
			label: 'URL',
		},
		{
			key: 'emotes',
			type: 'section',
			label: 'Emotes',
		},
		{
			key: 'emote0',
			type: 'file',
			label: 'Idle',
			accept: '.glb',
			placeholder: 'glb',
		}
	]
})

// Update interaction distance from config
app.on('config', () => {
	const distance = parseFloat(app.config.distance) || 2
	action.distance = Math.min(Math.max(distance, 1), 4)
}) 