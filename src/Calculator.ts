import { SimilarityFeature } from './Objects'
import { featrueGenerated } from './similarity/GetSimilarity'
import { getSameItem } from './similarity'

class Calculator {
    private objects: string[]
    public features: SimilarityFeature[]

    constructor(objects: string[]) {
        // 分析对象，字符串数组
        this.objects = objects

        // 当前符合要求的特征集
        this.features = []
    }

    private setFeatures(features: SimilarityFeature[]) {
        if (this.features.length === 0) {
            this.features = features
        } else {
            this.features = getSameItem(this.features, features)
        }
    }

    private similarity() {
        this.setFeatures(featrueGenerated(this.objects))
    }
}

export default Calculator
