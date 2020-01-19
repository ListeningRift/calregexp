class SimilarityFeature {
    private feature: string

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
    private feature: string

    constructor(feature: string) {
        this.feature = feature
    }

    stringGet(): string {
        return this.feature
    }

    regexpGet(): RegExp {
        return new RegExp('[' + this.generalNumber() + this.generalLetter() + ']+')
    }

    generalNumber(): string {
        if (this.feature.match(/[0-9]/)) {
            return '0-9'
        }
        return ''
    }

    generalLetter(): string {
        let res: string = ''
        if (this.feature.match(/[a-z]/)) {
            res += 'a-z'
        }

        if (this.feature.match(/[A-Z]/)) {
            res += 'A-Z'
        }
        return res
    }
}

export { SimilarityFeature, DifferenceFeature }
