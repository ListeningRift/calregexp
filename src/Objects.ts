
class SimilarityFeature {
    private value: string

    constructor(feature: string) {
        this.value = feature
    }

    public stringGet(): string {
        return this.value
    }

    public regexpGet(): RegExp {
        return new RegExp(this.value.split('').join('.*?'), 'g')
    }

    public isEqual(otherFeature: SimilarityFeature): boolean {
        return this.value === otherFeature.stringGet()
    }
}

export { SimilarityFeature }
