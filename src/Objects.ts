
class Feature {
    private value: string

    constructor(feature: string) {
        this.value = feature
    }

    public stringGet(): string {
        return this.value
    }

    public regexpGet(): RegExp {
        return new RegExp(this.value.split('').join('.*'))
    }

    public isEqual(otherFeature: Feature): boolean {
        return this.value === otherFeature.stringGet()
    }
}

export { Feature }
