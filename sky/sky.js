app.configure(() => {
  return [
    {
      key: 'skyNight',
      label: 'Night Sky',
      type: 'file',
      kind: 'texture',
    },
    {
      key: 'hdrNight',
      label: 'Night HDR',
      type: 'file',
      kind: 'hdr',
    },
    {
      key: 'switch',
      label: 'Switch',
      type: 'switch',
      options: [
        { label: '☀️', value: '1' },
        { label: '🌙', value: '2' },
      ],
      defaultValue: '1'
    }
  ]
})

const sky = app.create('sky')
const hdr = app.create('hdr')
app.add(sky)
app.add(hdr)

app.update = () => {
  const mode = app.config.switch
  if (mode === '2') {
    // Night mode
    sky.url = app.config.skyNight?.url
    hdr.url = app.config.hdrNight?.url
  } else {
    // Day mode (empty sky/hdr means engine default)
    sky.url = null
    hdr.url = null
  }
}