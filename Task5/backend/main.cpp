#include <iostream>
#include <cstdlib>
#include <mongoc/mongoc.h>

int main() {
    mongoc_init();

    const char* uri_string = getenv("MONGO_URI");

    if (!uri_string) {
        std::cout << "MONGO_URI not found\n";
        return 1;
    }

    mongoc_client_t* client = mongoc_client_new(uri_string);

    if (!client) {
        std::cout << "Connection failed\n";
        return 1;
    }

    std::cout << "Connected to MongoDB\n";

    mongoc_client_destroy(client);
    mongoc_cleanup();

    return 0;
}