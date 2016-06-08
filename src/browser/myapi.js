var myapi = {
  get: function(callback) {
    $.get('http://jsonplaceholder.typicode.com/posts/1')
      .done(function(data, textStatus) {
        callback(data);
      }).fail(function() {
        callback(null, 'error');
      });
  },

  post: function(data, callback) {
    $.post('http://jsonplaceholder.typicode.com/posts', data)
      .done(function() {
        callback();
      });
  }
};