import { hash, verify } from "@node-rs/argon2";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const exampleString = "hello"
    const hashed = await hash(exampleString)
    const verified = await verify(hashed, exampleString)

    return {
        hashed,
        verified
    }
};