const IMAGE1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAYAAAAA0F95AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGxmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDUtMTdUMDE6NTY6MDMrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA1LTE3VDAyOjAyOjUwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA1LTE3VDAyOjAyOjUwKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MGU4NDk0LTNkYjQtNDJiOC1hY2Y3LTk3Y2Y4MmM2YTcyOSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE1N2Q0MGMxLTc1MzAtNzU0Ni1hNzg3LTdmMjRlZWZlNzg4OCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcxYzJlODYzLWIxNzMtNDMwNS1hNmJhLTA0Y2VhODZkM2QwYiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzFjMmU4NjMtYjE3My00MzA1LWE2YmEtMDRjZWE4NmQzZDBiIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAxOjU2OjAzKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDBkOThhYmQtMjBmMS00NWZkLWJlMDUtYzQ1ZTM4ZWYwY2I1IiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAyOjAyOjUwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTcwZTg0OTQtM2RiNC00MmI4LWFjZjctOTdjZjgyYzZhNzI5IiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAyOjAyOjUwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SPpmJ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'
const IMAGE2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAYAAAAA0F95AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGxmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDUtMTdUMDE6NTY6MDMrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA1LTE3VDAyOjAwOjQ1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA1LTE3VDAyOjAwOjQ1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY2YWYyNmI2LWEwOGYtNDRjZi1iZDYyLTMxNTcxY2YwNWQ3MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjFmMDM1MzljLWY0NmEtMzY0Ni05NjJjLWQ2ZDNlZjE1NjhiMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcxYzJlODYzLWIxNzMtNDMwNS1hNmJhLTA0Y2VhODZkM2QwYiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzFjMmU4NjMtYjE3My00MzA1LWE2YmEtMDRjZWE4NmQzZDBiIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAxOjU2OjAzKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2M2NWYxNzEtNTI5Yy00MGU2LWI0NWItZGVhMzZiY2UwMzQyIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAyOjAwOjQ1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjZhZjI2YjYtYTA4Zi00NGNmLWJkNjItMzE1NzFjZjA1ZDcwIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE3VDAyOjAwOjQ1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Ca581AAABYElEQVRo3u3bsU7DMBDGcb8vM2OfAFZGFjoVKYxISAxIDJU69Bk6siIyIKFyxSWXXpy6ytkhGO4b/sri2rlfs7RVHRE5yzkAAAAAverz215vZ3OOlLnMaKwz32dVOoBAsAvQIJgDIBndPKtKBGnXb68eO31eP7X5/eWVi503GMAvLBWAFstud6vva3NeDMDPpAIQCGUB8MASwCeehvA8nkcN0CCUBcB7B08ADx+eKWfRABCnHVgJcnTok3vwO/7Vdr059PLaJtfLWfbzAAAAvwsQw/i4uG9L2i8CAwAAFAyQPfQADAAAoGCAKQIAAAAAAAAAQA8go78MAgAAGAQI7jnvS1EAAKCKgpQKUF8+yBxnHsAHgP8KIO8rHNocwP4nPesAMQRTAMcaA6AYjKFDAwAAPwcwOUbK0AAAwDQA0U+QWpxTr8+9NwAAYBqAJJyxhgQAAACQB4C/zAAAAACw0g4r8YhBABWuxgAAAABJRU5ErkJggg=='

const throttle = (func, wait = 500, options) => {
  let context, args, result,
      timeout = null,
      previous = 0;

  if (!options) {
    options = {}
  }

  let later = function() {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)

    if (!timeout) {
      context = args = null
    }
  }

  return function() {
    let now = Date.now()

    if (!previous && options.leading === false) {
      previous = now
    }

    let remaining = wait - (now - previous)

    context = this
    args = arguments

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now
      result = func.apply(context, args)

      if (!timeout) {
        context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }

      return result
    }
  }
}


class Canvas {
  constructor() {
    this.canvas = document.getElementById('app');
    this.dpr = window.devicePixelRatio || 1;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.dpr, this.dpr);

    this.raf = null

    this.mouse = {x: 0, y: 0}

    this.particles = []
    this.imagesSrc = [IMAGE1, IMAGE2]
    this.images = []
    this.imagesLoaded = false
    
    this.throttleTime = 10
    
    this.loadImages()
    this.initCanvas()
    this.initEvents()
  }
  
  loadImages() {
    this.imagesSrc.forEach((el, i) => {
      const img = new Image
      img.src = el
      
      img.onload = () => {
        this.images.push(img)
        
        if (i === this.images.length - 1) this.imagesLoaded = true
      }
    })
  }
  
  initCanvas() {
    this.canvas.width = window.innerWidth * this.dpr;
    this.canvas.height = window.innerHeight * this.dpr;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
  }

  initEvents() {
    this.initThrottle()

    this.renderBound = this.render.bind(this);
    this.raf = requestAnimationFrame(this.renderBound)
    
    this.onResizeBound = this.onResize.bind(this)
    window.addEventListener('resize', this.onResizeBound)
  }

  onResize() {
    this.dpr = window.devicePixelRatio || 1;
    this.ctx.scale(this.dpr, this.dpr);

    this.initCanvas()
  }
  
  onMouseMove(e) {
    this.mouse.x = e.clientX
    this.mouse.y = e.clientY

    if (this.imagesLoaded) this.addParticle();
  }
  
  initThrottle() {
    this.onMouseMoveBound = this.onMouseMove.bind(this)
    this.throttleBound = throttle(
      this.onMouseMoveBound, 
      this.throttleTime, 
      {leading: true}
    )
    window.addEventListener('mousemove', this.throttleBound)
  }
  
  removeThrottle() {
    window.removeEventListener('mousemove', this.throttleBound)
  }

  addParticle() {
    const image = this.images[Math.random() < 0.5 ? 0 : 1]
    const particle = new Particle(this.mouse.x, this.mouse.y, image, this.ctx, this.dpr);

    this.particles.push(particle);
  }

  updateParticles() {
    // Update particles
    this.particles.forEach((el, i) => {
      // Remove dead particles
      if (el.lifespan <= 0) {
        this.particles.splice(i, 1)
      } else {
        el.draw()
        el.update()
      }
    })
  }
  
  render() {
    // console.log('render');
    
    if (this.imagesLoaded) {
      if (this.particles.length) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.updateParticles()
      }
    }

    this.raf = requestAnimationFrame(this.renderBound)
  }
}

class Particle {
  constructor(x, y, img, ctx, dpr) {
    this.ctx = ctx
    this.dpr = dpr
    this.lifespan = 200
    this.img = img
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1
    }

    this.size = {w: 37, h: 37}

    this.position = {x: x - 18, y: y - 18};

    this.update();
  }

  update() {
    this.lifespan -= 1

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.size.w -= this.size.w / this.lifespan
    this.size.h -= this.size.h / this.lifespan
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      0,
      100,
      100,
      this.position.x*this.dpr,
      this.position.y*this.dpr,
      this.size.w*this.dpr,
      this.size.h*this.dpr
    )
  }
}

let canvas, gui
window.onload = function() {
  canvas = new Canvas()
  gui = new dat.GUI()
  
  const controller = gui.add(canvas, 'throttleTime', 0, 1000);
  controller.onFinishChange(function(value) {
    canvas.removeThrottle()
    canvas.initThrottle()
  });
};
