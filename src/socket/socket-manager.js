"use strict";

import socketIOClient from "socket.io-client";

const urlLocalServer = "http://localhost:8080";
const urlDeployServer = "https://sphere-websockets-r3f-server.onrender.com";

/**
 * Socket connection
 */
export const socket = socketIOClient(urlDeployServer);
