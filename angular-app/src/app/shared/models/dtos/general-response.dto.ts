export interface GeneralResponseDTO<T> {
    success: boolean;
    message: string;
    data: T;
}