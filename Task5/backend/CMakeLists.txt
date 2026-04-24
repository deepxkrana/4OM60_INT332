cmake_minimum_required(VERSION 3.10)
project(backend)

find_package(PkgConfig REQUIRED)
pkg_check_modules(MONGOC REQUIRED libmongoc-1.0)

include_directories(${MONGOC_INCLUDE_DIRS})
link_directories(${MONGOC_LIBRARY_DIRS})

add_executable(backend main.cpp)

target_link_libraries(backend ${MONGOC_LIBRARIES})