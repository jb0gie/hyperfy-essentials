app.scale.set(2.5, 2.5, 1.5) //optional glb scale
app.configure(() => {
	return [
		{
			type: 'section',
			key: 'title',
			label: 'Sky',
		},
		{
			type: 'switch',
			key: 'switch',
			label: 'TOD',
			value: 1,
			options: [
				{ value: 1, label: '☀️' },
				{ value: 2, label: '🌅' },
				{ value: 3, label: '🌙' },
				{ value: 4, label: '🌌' }
			]
		},
		{
			key: 'sky1',
			label: 'Dusk Sky',
			type: 'file',
			kind: 'texture',
			value: null
		},
		{
			key: 'hdr1',
			label: 'Dusk HDR',
			type: 'file',
			kind: 'hdr',
			value: null
		},
		{
			key: 'sky2',
			label: 'Night Sky',
			type: 'file',
			kind: 'texture',
			value: null
		},
		{
			key: 'hdr2',
			label: 'Night HDR',
			type: 'file',
			kind: 'hdr',
			value: null
		},
		{
			key: 'sky3',
			label: 'Aurora Sky',
			type: 'file', 
			kind: 'texture',
			value: null
		},
		{
			key: 'hdr3',
			label: 'Aurora HDR',
			type: 'file',
			kind: 'hdr',
			value: null
		},
	]
})

const sky = app.create('sky')
app.add(sky)

// Initialize sky state
function updateSky() {
	const mode = app.config.switch
	console.log('Current mode:', mode)

	if (mode === 4) {
		// Aurora
		sky.bg = app.config.sky3?.url
		sky.hdr = app.config.hdr3?.url
	} else if (mode === 3) {
		// Night
		sky.bg = app.config.sky2?.url
		sky.hdr = app.config.hdr2?.url
	} else if (mode === 2) {
		// Dusk
		sky.bg = app.config.sky1?.url
		sky.hdr = app.config.hdr1?.url
	} else {
		// Day mode (empty sky/hdr means engine default)
		sky.bg = null
		sky.hdr = null
	}
}

// Initial setup
updateSky()

// Listen for configuration changes
app.on('config', () => {
	updateSky()
})

// Update every frame to ensure sync
app.on('update', dt => {
	updateSky()
})