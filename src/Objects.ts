class SimilarityFeature {
    private readonly feature: string

    constructor(feature: string) {
        this.feature = feature
    }

    public stringGet(): string {
        return this.feature
    }

    public regexpGet(): RegExp {
        return new RegExp(this.feature.split('').join('.*?'), 'g')
    }

    public isEqual(otherFeature: SimilarityFeature): boolean {
        return this.feature === otherFeature.stringGet()
    }
}

class DifferenceFeature {
    private readonly feature: string | string[]

    constructor(feature: string | string[]) {
        this.feature = feature
    }

    public stringGet(): string | string[] {
        return this.feature
    }

    public regexpGet(): RegExp {
        return new RegExp('[' + this.genNumber() + this.genLetter() + ']+')
    }

    private genNumber(): string {
        if (Array.isArray(this.feature)) {
            for (let f of this.feature) {
                if (!f.match(/[0-9]/i)) {
                    return ''
                }
            }
            return '0-9'
        } else {
            if ((this.feature as string).match(/[0-9]/i)) {
                return '0-9'
            }
            return ''
        }
    }

    private genLetter(): string { // TODO   Refine the feature classification.
        if (Array.isArray(this.feature)) {
            for (let f of this.feature) {
                if (!f.match(/[A-Za-z]/i)) {
                    return ''
                }
            }
            return 'A-Za-z'
        } else {
            if ((this.feature as string).match(/[A-Za-z]/i)) {
                return 'A-Za-z'
            }
            return ''
        }
    }
}

export { SimilarityFeature, DifferenceFeature }
