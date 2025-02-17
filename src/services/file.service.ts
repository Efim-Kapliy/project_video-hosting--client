import { instance } from '@/api/axios'

class FileService {
	public readonly upload = async (file: FormData, folder?: string) => {
		return instance.post<{ url: string; name: string }[]>('/upload-file', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}

export const fileService = new FileService()
