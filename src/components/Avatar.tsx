import { useEffect, useRef, useState } from 'react'

const Avatar = () => {
  const avatarRef = useRef<HTMLDivElement>(null)

  const [pupilPosition, setPupilPosition] = useState({
    x: 0,
    y: 0,
  })

  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!avatarRef.current) return

      const rect = avatarRef.current.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = event.clientX - centerX
      const deltaY = event.clientY - centerY

      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      )

      if (distance === 0) return

      const maxMovement = 6

      const x =
        (deltaX / distance) *
        Math.min(maxMovement, Math.abs(deltaX) / 25)

      const y =
        (deltaY / distance) *
        Math.min(maxMovement, Math.abs(deltaY) / 25)

      setPupilPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true)

      setTimeout(() => {
        setIsBlinking(false)
      }, 150)
    }

    const interval = setInterval(blink, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="avatar-wrapper">
      <div className="avatar-glow" />

      <div className="avatar" ref={avatarRef}>
        <div className="avatar-hair">
          <span />
          <span />
          <span />
        </div>

        <div className="avatar-face">
          <div className="avatar-eyes">
            <div
              className={`avatar-eye ${
                isBlinking ? 'blink' : ''
              }`}
            >
              <span
                className="avatar-pupil"
                style={{
                  transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                }}
              />
            </div>

            <div
              className={`avatar-eye ${
                isBlinking ? 'blink' : ''
              }`}
            >
              <span
                className="avatar-pupil"
                style={{
                  transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                }}
              />
            </div>
          </div>

          <div className="avatar-nose" />

          <div className="avatar-mouth" />
        </div>

        <div className="avatar-body">
          <div className="avatar-shirt-line" />
        </div>
      </div>

      <div className="avatar-label">
        <span className="avatar-label-dot" />
        currently building
      </div>
    </div>
  )
}

export default Avatar