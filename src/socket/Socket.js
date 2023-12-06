import { io } from "socket.io-client";
const URL = "http://localhost:8090"
export const socket = io(URL);