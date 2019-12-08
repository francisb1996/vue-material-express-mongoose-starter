import axios from 'axios'
import Applicant from '../../../models/Applicant'

class ApplicantService {
  async getAll(): Promise<Applicant[]> {
    const res = await axios.get(`/Applicants`)
    return res.data.map((Applicant: any) => new Applicant(Applicant))
  }

  async get(_id: string): Promise<Applicant> {
    const res = await axios.get(`/Applicants/${_id}`)
    return new Applicant(res.data)
  }

  async add(Applicant: Applicant): Promise<Applicant> {
    const res = await axios.post(`/Applicants`, Applicant)
    return new Applicant(res.data)
  }

  async deleteApplicantById(_id: string): Promise<void> {
    await axios.delete(`/Applicants/${_id}`)
  }
}

export default new ApplicantService();