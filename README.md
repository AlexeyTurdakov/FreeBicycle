# FreeBicycle


webpack-dev-server использует «виртуальный» сервер Express в сочетании с Sock.js для эмуляции сервера, работающего на вашем компьютере. Что касается компиляции, webpack-dev-server перекомпилирует bundleкаждый раз, когда обнаруживает изменения в коде. Однако эта перекомпиляция выполняется из памяти, а не из buildкаталога проекта (или, в вашем случае, из distкаталога).