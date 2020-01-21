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
    private feature1: string
    private feature2: string

    constructor(feature1: string, feature2: string) {
        this.feature1 = feature1
        this.feature2 = feature2
    }

    stringGet(): string {
        return 'The Feature I is: \'' + this.feature1 + '\', the Feature II is: \'' + this.feature2 + '\'.'
    }

    regexpGet(): RegExp {
        return new RegExp('[' + this.generalNumber() + this.generalLetter() + ']+')
    }

    generalNumber(): string {
        if (this.feature1.match(/[0-9]/) && this.feature2.match(/[0-9]/)) {
            return '0-9'
        }
        return ''
    }

    generalLetter(): string {
        let res: string = ''
        if (this.feature1.match(/[a-z]/) && this.feature2.match(/[a-z]/)) {
            res += 'a-z'
        }

        if (this.feature1.match(/[A-Z]/) && this.feature2.match(/[A-Z]/)) {
            res += 'A-Z'
        }
        return res
    }
}

export { SimilarityFeature, DifferenceFeature }
