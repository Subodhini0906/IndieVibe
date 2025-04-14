//import { handlers } from "../../../../auth"
//export const { GET, POST } = handlers
import { handlers } from "@/auth" // Import from wherever your auth.ts file is located
// Export the handler functions directly
export const GET = handlers.GET
export const POST = handlers.POST