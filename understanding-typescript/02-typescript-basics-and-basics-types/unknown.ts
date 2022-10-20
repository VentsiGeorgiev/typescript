// unknown
let userInput: unknown;

userInput = 5;
userInput = 'Peter';

// never
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
generateError('Error message..', 500);
