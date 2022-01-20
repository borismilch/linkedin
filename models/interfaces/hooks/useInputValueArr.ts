import { ChangeEvent } from "react";

type useInputValueArr = [string, {value: string, onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | ChangeEvent<HTMLTextAreaElement> )}, () => void, (val: string) => void]


export default useInputValueArr