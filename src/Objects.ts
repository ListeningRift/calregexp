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

    public stringGet(): string {
        return this.feature
    }

    public regexpGet(): RegExp {
        return new RegExp('[' + this.genNumber() + this.genLetter() + ']+')
    }

    public regexpGetwithAnother(another: DifferenceFeature): RegExp {
        return new RegExp('[' + this.genNumberwithAnother(another) + this.genLetterwithAnother(another) + ']+')
    }

    private genNumber(): string {
        if (this.feature.match(/[0-9]/)) {
            return '0-9'
        }
        return ''
    }

    private genLetter(): string {
        let res: string = ''
        if (this.feature.match(/[a-z]/)) {
            res += 'a-z'
        }

        if (this.feature.match(/[A-Z]/)) {
            res += 'A-Z'
        }
        return res
    }

    private genNumberwithAnother(another: DifferenceFeature): string {
        if (this.feature.match(/[0-9]/) && another.stringGet().match(/[0-9]/)) {
            return '0-9'
        }
        return ''
    }

    private genLetterwithAnother(another: DifferenceFeature): string {
        let res: string = ''
        if (this.feature.match(/[a-z]/) && another.stringGet().match(/[a-z]/)) {
            res += 'a-z'
        }

        if (this.feature.match(/[A-Z]/) && another.stringGet().match(/[A-Z]/)) {
            res += 'A-Z'
        }
        return res
    }
}

export { SimilarityFeature, DifferenceFeature }
