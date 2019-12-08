export default class Applicant {
    _id?: string
    name: string
    ssn: string
    birthday: Date
    address: string
    registered: Date

    constructor(applicant?: any) {
        this._id = applicant ? applicant._id : undefined
        this.name = applicant ? applicant.name : undefined
        this.ssn = applicant ? applicant.ssn : undefined
        this.birthday = applicant ? applicant.birthday : undefined
        this.address = applicant ? applicant.address : undefined
        this.registered = applicant ? applicant.registered : undefined
    }
}