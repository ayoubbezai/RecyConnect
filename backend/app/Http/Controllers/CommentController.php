<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;


class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try{
        //get all the comments in a post
        $request_query = $request->query();

        //get per_page from request if availible

        $perPage = filter_var($request_query["per_page"] ?? 15, FILTER_VALIDATE_INT) ?: 15;
        $perPage = max($perPage, 1);

                   $data = Comment::query();

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
        //add a comment in a item or a post

        try{

    $data = $request->validate([
        'content' => 'required|string',
        'item_id' => 'required|exists:items,id',

    ]);
    

$user_id = Auth::user()->id;

    Comment::create(["content"=>$data["content"],
                    "item_id"=>$data["item_id"],
                    "user_id"=>$user_id
]);


      return response()->json([
            "success" => true,
            "message" => "Comment created successfully",
            "data" => []
        ], Response::HTTP_CREATED);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to create the Comment',
            'error' => $e->getMessage(),
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //get all comment of a item
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //

                    $comment = Comment::findOrFail($id);

        try{
            $data = $request->validate([
        'content' => 'required|string',
        'item_id' => 'required|exists:items,id',

    ]);
    $user_id = Auth::user()->id;

    $comment->update(["content"=>$data["content"],
                    "item_id"=>$data["item_id"],
                    "user_id"=>$user_id
]);
  return response()->json([
            "success" => true,
            "message" => "Comment update successfully",
            "data" => []
        ], Response::HTTP_CREATED);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to update the Comment',
            'error' => $e->getMessage(),
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }


    }

    /**
     * Remove the specified resource from storage.
     */
 public function destroy(string $id)
    {
        //
          try{
     $comment = Comment::findOrFail($id);
    $comment->delete();


      return response()->json([
            "success" => true,
            "message" => "comment deleted successfully",
            "data" => []
        ], Response::HTTP_OK);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to deleted the comment',
            'error' => $e->getMessage(),
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    }
}
