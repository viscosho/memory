export type LoginFormType = {
	username: string;
	handleSubmit: React.FormEventHandler;
	handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
