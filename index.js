const options = {
    position: 'top-right',
    backgroundColor: '#172029',
    transform: ''
}

export class CompassControl extends maptalks.control.Control {
    constructor(options) {
        super(options)
        this.COMPASS = 'maptalks-compass'
        this.DIAL = 'maptalks-compass-dial'
        this.NEEDLE = 'maptalks-compass-needle'
        this.CLOCK = 'maptalks-compass-dial-clock'
    }

    buildOn(map) {
        const compass = this._getCompass()
        this._compass = compass
        const transform = this.options['transform']
        const bgColor = this.options['backgroundColor']
        let style = `background-color: ${bgColor};cursor:pointer;`
        if (transform) style += ` transform: ${transform};`
        maptalks.DomUtil.setStyle(this._compass, style);
        maptalks.DomUtil.on(compass, 'click', () => {
            const bearing = this.getMap().getBearing();
            const origalBearing = bearing;
            if (this._showPlayer) {
                this._showPlayer.cancel();
            }
            const duration = 500;
            const easing = 'out';
            const player = this._showPlayer = maptalks.animation.Animation.animate({
                'bearing': bearing
            }, {
                'duration': duration,
                'easing': easing
            }, frame => {
                const bearing = frame.styles.bearing;
                this.getMap().setBearing(origalBearing - bearing);
            });
            player.play();
        }, this);
        return compass
    }

    onAdd() {
        this.map = this.getMap()
        this.map.on('mousemove animating animatestart animateend dragrotating viewchange', this._rotateCompass, this)
        this._rotateCompass()
    }

    onRemove() {
        this.map.off('mousemove animating animatestart animateend dragrotating viewchange', this._rotateCompass, this)
        this._compass.remove()
        delete this._deg
        delete this._compass
        delete this._needle
        delete this.map
    }

    _rotateCompass() {
        let bearing = parseInt(this.map.getBearing(), 0)
        if (bearing <= 180) bearing *= -1
        if (bearing !== parseInt(this._deg, 0)) {
            this._deg = bearing
            maptalks.DomUtil.setStyle(
                this._needle,
                `transform: rotate(${this._deg}deg);`
            )
        }
    }

    _getCompass() {
        const compass = this._createDivWithClassName(this.COMPASS)
        const dial = this._getDial()
        const needle = this._getNeedle()
        compass.appendChild(dial)
        compass.appendChild(needle)
        return compass
    }

    _getDial() {
        const dial = this._createDivWithClassName(this.DIAL)
        for (let i = 0; i < 4; i++) {
            const clock = this._getClock()
            dial.appendChild(clock)
        }
        return dial
    }

    _getClock() {
        return this._createDivWithClassName(this.CLOCK)
    }

    _getNeedle() {
        const needle = this._createDivWithClassName(this.NEEDLE)
        this._needle = needle
        return needle
    }

    _createDivWithClassName(name) {
        return maptalks.DomUtil.createEl('div', name)
    }
}

CompassControl.mergeOptions(options)
