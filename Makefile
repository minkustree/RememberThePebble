all:
	pebble build

install:	all
	pebble install
	pebble logs

clean:
	pebble clean
	find . -type f -name "*~" -exec rm -f {} \;
