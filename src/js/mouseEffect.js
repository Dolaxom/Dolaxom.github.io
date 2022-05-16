const IMAGE1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDUtMTZUMDI6NTA6MTQrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDUtMTZUMDI6NTA6MTQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA1LTE2VDAyOjUwOjE0KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2M2IxYjdmLWQ1YWQtNDNhNi05NTI0LTRjYjBkMmIwMDczNCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNkNTRjN2QxLTRkMGQtODI0NC05YWIwLWEzNDE3YTMxZTQwNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjJmMmM4OTMxLWQwYmUtNDM0ZS04ZjJlLTU3NTJjY2NkODdmZCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmYyYzg5MzEtZDBiZS00MzRlLThmMmUtNTc1MmNjY2Q4N2ZkIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE2VDAyOjUwOjE0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTYzYjFiN2YtZDVhZC00M2E2LTk1MjQtNGNiMGQyYjAwNzM0IiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE2VDAyOjUwOjE0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tEJYpAAAMcklEQVR42u1bW2xUxxmeOZe9+e5i41swGIOAkKKKRqrUl/BQ+pLQqEItIYS2qkBRq4qgPtBStXlIL5EqVZH6EqkPfesDVYVaWon0gRdElTyQBCITiEAQF7Cx17u22V3vnt1zpv93dmZ39rDeXXttYkNHGp/ds8cz89++/59//sNPnjzJVLMsi124cIHdvXvX/4xWKBSYaZrqkVA8Hj9L97bQZ8HqNM55KhqNHqDrA3w3DIPFYjH/N9d12cDAAJ5ht2/fLs2H73gOTQjx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'
const IMAGE2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDUtMTZUMDI6NTM6NTQrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDUtMTZUMDI6NTM6NTQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA1LTE2VDAyOjUzOjU0KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY2NDJhOTEyLTExNDgtNDRkMy05NzA5LWFhYWRiNzRlNjQxZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjhiMTE4MzkwLWE0NjItNjk0OS05OTZhLWEwNzE1M2JlZTZlZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIzNDlhOTQwLTIwZjYtNDkyMS04ZGRmLWJlZWIwN2Q3MjkzOCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjM0OWE5NDAtMjBmNi00OTIxLThkZGYtYmVlYjA3ZDcyOTM4IiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE2VDAyOjUzOjU0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjY0MmE5MTItMTE0OC00NGQzLTk3MDktYWFhZGI3NGU2NDFlIiBzdEV2dDp3aGVuPSIyMDIyLTA1LTE2VDAyOjUzOjU0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7dpnbbAAAHu0lEQVR4AeXB24+c91kA4Of9fd/M7NFrO3ES24mbgyO3OSh22lgkDb0gAtQ7pEpUgkuEuEC9QiAhuOECiX8ALrnipCKQQHCBUIVQRENpyKGCNBYVDmmTOHEg2dPM7Mx830t2V1liZ4x347UJ2eeJzHSQFQdcccDVhOl+Ab+GHyFtufSvT/nnP/l9M0spSrq2EEKT35D+ViRNxeohHnuBBy+Y6s1TfPfLzPTpjWiD8JD057a1ri2sL4Rz//Qb7n7tz+xS7Zr+Et/AT9jR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'

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
    this.lifespan = 120
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
