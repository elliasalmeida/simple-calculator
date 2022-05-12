int numeroPar(int n) {
	if(n < 0) {
		return 0;
	}
	2 + numeroPar(n - 2);
	printf("%d ", n);
}

int numeroParSig(int n) {
	if(n < 0) {
		return -1 * numeroPar(n);
	}
	return numeroPar(n);
}