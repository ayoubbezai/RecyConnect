<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all posts with pagination
        try{
            //get the query from the request
            $request_query = $request->query();

            //get per_page from request if availible

             $perPage = filter_var($request_query["per_page"] ?? 15, FILTER_VALIDATE_INT) ?: 15;
        $perPage = max($perPage, 1);

        //validate sort by and direction

        $validSortColumns = ['title', 'created_at','updated_at'];
        $validSortDirection = ["asc","desc"];
        $sortBy = in_array($request_query['sort_by'] ?? 'created_at', $validSortColumns)
                ? $request_query['sort_by'] ?? 'created_at'
                : 'created_at';

        $sortDirection = in_array(strtolower($request_query['sort_direction'] ?? 'asc'), $validSortDirection)
            ? strtolower($request_query['sort_direction'] ?? 'asc')
            : 'asc';
        
           $data = Item::query();

           //search by the title or contant
            if (!empty($request_query['search'])) {
            $search = $request_query['search'];
            $data->where(function ($query) use ($search) {
                $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('content', 'like', '%' . $search . '%');
            });
        }

        //filer by category

                    if (!empty($request_query['category'])) {
                        $category = $request_query['category'];
                        $data->where("category",$category);

                    }

        //filer by location

                    if (!empty($request_query['location'])) {
                        $location = $request_query['location'];
                        $data->where("location",$location);

                    }

                    //filter by price 
        $startPrice = $request_query['startPrice'] ?? null;
        $endPrice = $request_query['endPrice'] ?? null;
        if ($startPrice > $endPrice) {
    [$startPrice, $endPrice] = [$endPrice, $startPrice];
}

        if ($startPrice && $endPrice) {
    $data->whereBetween('price', [$startPrice, $endPrice]);
        }
        $data->orderBy($sortBy, $sortDirection);

        // Get paginated results
        $paginatedData = $data->paginate($perPage);


 $response = [
            'success' => true,
            'message' => 'Data fetched successfully',
            'data' => $paginatedData->items(), 
            'pagination' => [
        'total_items' => $paginatedData->total(), // Total number of items
        'items_per_page' => $paginatedData->perPage(), // Items per page
        'current_page' => $paginatedData->currentPage() , // Current page number
        'total_pages' => $paginatedData->lastPage(), // Last page number
        'from' => $paginatedData->firstItem(), // First item on the current page
        'to' => $paginatedData->lastItem(), // Last item on the current page
        'first_page_url' => $paginatedData->url(1), // First page URL
        'last_page_url' => $paginatedData->url($paginatedData->lastPage()), // Last page URL
        'next_page_url' => $paginatedData->nextPageUrl(), // Next page URL
        'prev_page_url' => $paginatedData->previousPageUrl(), // Previous page URL
        'path' => $paginatedData->path(), // Base path of pagination
    ]
        ];

        // Return success response
        return response()->json($response, Response::HTTP_OK);
         } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to get items',
            'error' => $e->getMessage(),
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

        }

    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
