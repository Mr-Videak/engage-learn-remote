
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { BookOpen, Search, Plus, Star, Calendar, Download, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";

const MyNotes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const notes = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      subject: "Advanced React",
      date: "2024-05-28",
      preview: "useState, useEffect, and custom hooks explanation...",
      tags: ["React", "Hooks", "JavaScript"],
      starred: true,
      content: `# React Hooks Deep Dive

## useState
- Manages component state
- Returns array with current state and setter function
- Example: const [count, setCount] = useState(0)

## useEffect
- Handles side effects in functional components
- Runs after render by default
- Can specify dependencies to control when it runs

## Custom Hooks
- Reusable stateful logic
- Must start with "use"
- Can use other hooks inside`
    },
    {
      id: 2,
      title: "Data Structures Overview",
      subject: "Algorithms",
      date: "2024-05-27",
      preview: "Arrays, linked lists, stacks, queues, trees...",
      tags: ["Data Structures", "Computer Science"],
      starred: false,
      content: `# Data Structures Overview

## Arrays
- Fixed-size sequential collection
- O(1) access time
- O(n) search time for unsorted arrays

## Linked Lists
- Dynamic size
- O(1) insertion/deletion at head
- O(n) access time

## Stacks
- LIFO (Last In, First Out)
- Push and pop operations
- Used in function calls, undo operations

## Queues
- FIFO (First In, First Out)
- Enqueue and dequeue operations
- Used in BFS, task scheduling`
    },
    {
      id: 3,
      title: "UI Design Principles",
      subject: "Design",
      date: "2024-05-26",
      preview: "Contrast, hierarchy, balance, proximity...",
      tags: ["Design", "UI/UX", "Principles"],
      starred: true,
      content: `# UI Design Principles

## Contrast
- Creates visual hierarchy
- Guides user attention
- Improves readability

## Hierarchy
- Organizes content importance
- Uses size, color, spacing
- Helps users navigate

## Balance
- Visual weight distribution
- Symmetrical vs asymmetrical
- Creates stability

## Proximity
- Groups related elements
- Creates organization
- Reduces cognitive load`
    }
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedNoteData = selectedNote ? notes.find(n => n.id === selectedNote) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <BookOpen className="mr-3 text-blue-500" />
              My Notes
            </h1>
            <p className="text-gray-600">
              Organize and review your learning materials
            </p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            New Note
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notes List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Notes List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredNotes.map((note) => (
                <Card 
                  key={note.id} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedNote === note.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedNote(note.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{note.title}</h3>
                      {note.starred && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{note.subject}</p>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">{note.preview}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {note.date}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {note.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Note Content */}
          <div className="lg:col-span-2">
            {selectedNoteData ? (
              <Card className="shadow-lg border-0 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {selectedNoteData.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-2">
                        <span>{selectedNoteData.subject}</span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {selectedNoteData.date}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Star className={`w-4 h-4 mr-1 ${selectedNoteData.starred ? 'text-yellow-500 fill-current' : ''}`} />
                        {selectedNoteData.starred ? 'Starred' : 'Star'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex items-center space-x-2 mt-4">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <div className="flex flex-wrap gap-2">
                      {selectedNoteData.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                      {selectedNoteData.content}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-0 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">Select a note to view</h3>
                  <p className="text-sm">Choose a note from the list to see its content</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{notes.length}</div>
              <div className="text-gray-600">Total Notes</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {notes.filter(n => n.starred).length}
              </div>
              <div className="text-gray-600">Starred Notes</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {new Set(notes.flatMap(n => n.tags)).size}
              </div>
              <div className="text-gray-600">Unique Tags</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
