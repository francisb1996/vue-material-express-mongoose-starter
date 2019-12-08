import axios from 'axios'
import Report from '../../../models/Report'

class ReportService {
  async getAll(): Promise<Report[]> {
    const res = await axios.get(`/Reports`)
    return res.data.map((Report: any) => new Report(Report))
  }

  async get(_id: string): Promise<Report> {
    const res = await axios.get(`/Reports/${_id}`)
    return new Report(res.data)
  }

  async add(Report: Report): Promise<Report> {
    const res = await axios.post(`/Reports`, Report)
    return new Report(res.data)
  }

  async deleteReportById(_id: string): Promise<void> {
    await axios.delete(`/Reports/${_id}`)
  }
}

export default new ReportService();