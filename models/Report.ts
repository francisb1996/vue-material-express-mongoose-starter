export default class Report {
    _id?: string
    name?: string

    constructor(report?: any) {
        this._id = report._id
        this.name = report.name
    }
}