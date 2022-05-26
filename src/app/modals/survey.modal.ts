export class Survey {
    constructor(
        public user_id: number, 
        public question_1: string, 
        public question_2: string, 
        public question_3: string,
        public question_4: string,
        public percentage: number,
        public isCompleted: boolean) {}
}