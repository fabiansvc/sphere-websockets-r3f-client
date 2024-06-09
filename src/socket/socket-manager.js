"use strict";

import socketIOClient from "socket.io-client";

/**
 * Socket connection
 */
export const socket = socketIOClient("http://localhost:8080");
