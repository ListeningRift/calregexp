
class Feature {
    private value: string

    constructor(feature: string) {
        this.value = feature
    }

    public stringGet() {
        return this.value
    }

    public regexpGet() {
        return new RegExp(this.value.split('').join('.*'))
    }

    public compare(otherFeature: Feature) {
        return this.value === otherFeature.stringGet()
    }
}

export { Feature }
