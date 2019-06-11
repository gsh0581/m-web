const router = {
    renderView() {
        let hash = location.hash;
        switch (hash) {
            case '#home':
                $('#app').html('');
                break;
            case '#category':
                $('#app').html('');
                break;

            case '#detail':
                $('#app').html('');
                break;
            case '#login':
                $('#app').html('');
                break;
            case '#reg':
                $('#app').html('');
                break;
        }

    }
}